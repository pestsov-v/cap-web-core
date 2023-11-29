const path = require('path')

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        webpack: (config) => {
            config.resolve.alias["@CoreContainer"] = path.resolve(__dirname, "src/core/ioc/ioc.ts");
            config.resolve.alias["@Common"] = path.resolve(__dirname, "src/core/common/index.ts");
            config.resolve.alias["@Core/Types"] = path.resolve(__dirname, "types/core/index.d.ts");
            config.resolve.alias["@Packages"] = path.resolve(__dirname, "src/core/packages/packages.ts");

            return config
        }
    }
    return nextConfig
}