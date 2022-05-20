module.exports = {
  apps: [
    {
      name: 'kinoscope',
      script: 'dist/main.js',
      cwd: './',
      args: '',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      exp_backoff_restart_delay: 3000,
    },
  ],
};
