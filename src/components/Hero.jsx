import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

// Theme-based color configuration
const THEME_COLORS = {
  light: {
    primary: 0x7c3aed,    // Purple-600
    secondary: 0x0891b2,  // Cyan-600
    background: 0xf8fafc, // slate-50
    particle: 0x475569,   // slate-600
    line: 0xcbd5e1,       // slate-300
  },
  dark: {
    primary: 0x8b5cf6,    // Purple-500
    secondary: 0x06d6a0,  // Emerald-400
    background: 0x0f172a, // slate-900
    particle: 0x64748b,   // slate-500
    line: 0x334155,       // slate-700
  }
};

const PARTICLE_COUNT = 200;
const LINE_DISTANCE = 120;
const DAMPING_FACTOR = 0.05;

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('dark');
    const canvasRef = useRef(null);

    // 3D Scene Variables
    const threeRef = useRef({
        scene: null,
        camera: null,
        renderer: null,
        geometry: null,
        material: null,
        points: null,
        mouse: new THREE.Vector2(),
        targetMouse: new THREE.Vector2(),
        particles: [],
        currentColors: THEME_COLORS.dark
    });

    // Stats data
    const stats = [
        { number: "150+", label: "Projects Delivered" },
        { number: "98%", label: "Client Success Rate" },
        { number: "50+", label: "Global Clients" },
        { number: "24/7", label: "Managed Support" }
    ];

    // Update colors when theme changes
    const updateColors = useCallback(() => {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        setCurrentTheme(theme);
        const colors = THEME_COLORS[theme];
        
        if (threeRef.current.material) {
            threeRef.current.material.color.setHex(colors.particle);
        }
        
        if (threeRef.current.lineMaterial) {
            threeRef.current.lineMaterial.color.setHex(colors.line);
        }

        threeRef.current.currentColors = colors;
    }, []);

    // Theme observer
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    updateColors();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        // Initial theme detection
        updateColors();

        return () => observer.disconnect();
    }, [updateColors]);

    // Initialize Three.js scene
    useEffect(() => {
        if (!canvasRef.current) return;

        const { current: three } = threeRef;
        const container = canvasRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // 1. Setup Scene, Camera, Renderer
        three.scene = new THREE.Scene();
        three.camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
        three.camera.position.z = 1000;

        three.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        three.renderer.setSize(width, height);
        three.renderer.setClearColor(0x000000, 0);
        three.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(three.renderer.domElement);

        // 2. Create Particles with theme colors
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        three.geometry = new THREE.BufferGeometry();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 4000;
            positions[i3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i3 + 2] = (Math.random() - 0.5) * 3000 - 1500;

            three.particles[i] = {
                x: positions[i3],
                y: positions[i3 + 1],
                z: positions[i3 + 2],
                vx: Math.random() * 0.5 - 0.25,
                vy: Math.random() * 0.5 - 0.25
            };
        }

        three.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        three.material = new THREE.PointsMaterial({
            color: three.currentColors.particle,
            size: 6,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.7
        });

        three.points = new THREE.Points(three.geometry, three.material);
        three.scene.add(three.points);

        // 3. Create Connection Lines with theme colors
        const lineGeometry = new THREE.BufferGeometry();
        const maxLines = PARTICLE_COUNT * 10;
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLines * 2 * 3), 3));

        three.lineMaterial = new THREE.LineBasicMaterial({
            color: three.currentColors.line,
            transparent: true,
            opacity: currentTheme === 'dark' ? 0.15 : 0.1
        });

        three.lineMesh = new THREE.LineSegments(lineGeometry, three.lineMaterial);
        three.scene.add(three.lineMesh);

        // 4. Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            const positions = three.geometry.attributes.position.array;

            // Animate particles
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const p = three.particles[i];
                const i3 = i * 3;

                positions[i3] += p.vx * 0.3;
                positions[i3 + 1] += p.vy * 0.3;

                // Screen wrapping
                if (positions[i3] < -2000) positions[i3] = 2000;
                if (positions[i3] > 2000) positions[i3] = -2000;
                if (positions[i3 + 1] < -1000) positions[i3 + 1] = 1000;
                if (positions[i3 + 1] > 1000) positions[i3 + 1] = -1000;
            }

            three.geometry.attributes.position.needsUpdate = true;

            // Mouse interaction
            three.mouse.lerp(three.targetMouse, DAMPING_FACTOR);
            three.points.rotation.y = three.mouse.x * 0.1;
            three.points.rotation.x = three.mouse.y * 0.1;

            // Update connection lines
            let lineIndex = 0;
            const linePositions = three.lineMesh.geometry.attributes.position.array;
            let currentLineCount = 0;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const pi3 = i * 3;

                for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                    const pj3 = j * 3;

                    const dx = positions[pi3] - positions[pj3];
                    const dy = positions[pi3 + 1] - positions[pj3 + 1];
                    const dz = positions[pi3 + 2] - positions[pj3 + 2];
                    const distanceSq = dx * dx + dy * dy + dz * dz;

                    if (distanceSq < LINE_DISTANCE * LINE_DISTANCE) {
                        linePositions[lineIndex++] = positions[pi3];
                        linePositions[lineIndex++] = positions[pi3 + 1];
                        linePositions[lineIndex++] = positions[pi3 + 2];

                        linePositions[lineIndex++] = positions[pj3];
                        linePositions[lineIndex++] = positions[pj3 + 1];
                        linePositions[lineIndex++] = positions[pj3 + 2];

                        currentLineCount++;
                        if (lineIndex >= linePositions.length) break;
                    }
                    if (lineIndex >= linePositions.length) break;
                }
                if (lineIndex >= linePositions.length) break;
            }

            three.lineMesh.geometry.setDrawRange(0, currentLineCount * 2);
            three.lineMesh.geometry.attributes.position.needsUpdate = true;

            three.renderer.render(three.scene, three.camera);
        };

        // 5. Event Handlers
        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            three.camera.aspect = newWidth / newHeight;
            three.camera.updateProjectionMatrix();
            three.renderer.setSize(newWidth, newHeight);
        };

        const handleMouseMove = (event) => {
            three.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            three.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Start everything
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();
        setIsVisible(true);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (container.contains(three.renderer.domElement)) {
                container.removeChild(three.renderer.domElement);
            }
            three.renderer.dispose();
        };
    }, [currentTheme]);

    return (
        <section id="hero" className="min-h-screen bg-base-100 text-base-content relative overflow-hidden">
            {/* 3D Canvas */}
            <div
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-70"
            />

            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-accent/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">

                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-primary/50 bg-primary/10 mb-6 sm:mb-8 backdrop-blur-sm shadow-lg 
                    transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"}`}>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-secondary tracking-wider">Innovating Digital Solutions</span>
                </div>

                {/* Headline */}
                <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-1000 delay-300 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        Building Intelligent
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Digital Experiences
                    </span>
                </h1>

                {/* Subtext */}
                <p className={`text-base sm:text-lg lg:text-xl text-base-content/80 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 delay-500 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    Appriyo transforms businesses through cutting-edge technology,
                    innovative design, and data-driven strategies that drive real results.
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 transition-all duration-1000 delay-700 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                    <button className="btn btn-primary btn-lg group relative overflow-hidden border-0 min-w-[180px]">
                        <span className="relative z-10">Start Your Project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>

                    <button className="btn btn-outline btn-lg group border-base-content/30 hover:border-secondary text-base-content hover:text-base-content min-w-[180px]">
                        <span className="group-hover:text-base-content transition-colors duration-300">Our Services</span>
                        <div className="w-0 group-hover:w-5 h-0.5 bg-secondary transition-all duration-300 ml-2"></div>
                    </button>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 max-w-4xl w-full mx-auto rounded-xl border border-base-300/50 backdrop-blur-lg bg-base-200/30 shadow-xl 
                    transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group cursor-pointer p-2 sm:p-3 hover:bg-base-300/30 rounded-lg transition-all duration-300">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </div>
                            <div className="text-xs sm:text-sm text-base-content/60 font-medium mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-base-content/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 sm:h-3 bg-base-content/50 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;