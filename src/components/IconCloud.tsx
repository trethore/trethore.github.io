'use client';

import { useEffect, useRef } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { useTheme } from 'next-themes';
import { gsap } from 'gsap';
import {
    siPython,
    siReact,
    siJavascript,
    siMongodb,
    siExpress,
    siVite,
    siGit,
    siGithub,
    siVercel,
    siMui,
    siHtml5,
    siCss,
    siTailwindcss,
    siSelenium,
    siCanva,
    siHeroku,
    siGooglegemini,
    siOpenai,
    siHuggingface,
    siNodedotjs,
    siSupabase,
    siBootstrap,
    siFigma,
    siNextdotjs
} from 'simple-icons';

const cloudIcons = [
    siPython,
    siReact,
    siJavascript,
    siMongodb,
    siExpress,
    siVite,
    siGit,
    siGithub,
    siVercel,
    siMui,
    siHtml5,
    siCss,
    siTailwindcss,
    siSelenium,
    siCanva,
    siHeroku,
    siGooglegemini,
    siOpenai,
    siHuggingface,
    siNodedotjs,
    siSupabase,
    siBootstrap,
    siFigma,
    siNextdotjs
];

const IconCloud = () => {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'power3.out',
            });
        }
    }, []);

    const icons = [...cloudIcons].map((icon) => {
        return renderSimpleIcon({
            minContrastRatio: 21,
            fallbackHex: theme === 'dark' ? '#fff' : '#000',
            icon,
            size: 72,
            aProps: {
                onClick: (e: React.MouseEvent) => e.preventDefault()
            }
        })
    });

    return (
        <div ref={containerRef} className="icon-cloud-container">
            <Cloud
                options={{
                    outlineMethod: 'none',
                    pinchZoom: false,
                    wheelZoom: false,
                    initial: [0.1, 0.1],
                    minSpeed: 0.01,
                    clickToFront: 500,
                    reverse: true,
                }}
                containerProps={{
                    className: 'icon-cloud'
                }}
            >
                {icons}
            </Cloud>
        </div>
    );
};

export default IconCloud;
