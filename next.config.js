/** @type {import('next').NextConfig} */
const nextConfig = {
    
    async rewrites(){
        return [
            {
                source: "/",
                destination: "/default",
            },
        ]
    }
};

module.exports = nextConfig
