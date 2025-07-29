import env from 'env-var';

process.loadEnvFile();


export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
}