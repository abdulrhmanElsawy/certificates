const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/demo-test' : '',
    assetPrefix: isProd ? '/demo-test' : '',

    images: {
        domains: ['lh3.googleusercontent.com'],
        unoptimized: true
    },

    output: "export",
    trailingSlash: true,  
    skipTrailingSlashRedirect: true, 
    reactStrictMode: true,

    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            use: 'file-loader',
        });
        
        config.output.publicPath = isProd ? '/demo-test/_next/' : '/_next/';

        return config;
    },
};

export default nextConfig;
