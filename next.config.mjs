/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                // protocol: 'http', quando for utilizar https... Essa tag geral é pra usar o images do react.
                hostname: 'res.cloudinary.com'
            }
        ]
    }
};

export default nextConfig;
