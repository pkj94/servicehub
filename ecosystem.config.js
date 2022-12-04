module.exports = {
    apps: [
        {
            name: "Erework-Refector-API",
            script: "./app.js",
            watch: true,
            env: {
                "NODE_ENV": "development"
            },
            env_staging: {
                "NODE_ENV": "staging",
            },
            env_production: {
                "NODE_ENV": "production",
            }
        }
    ]
}
