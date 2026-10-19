
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('TypeScript check') {
            steps {
                sh 'npx tsc --noEmit'
            }
        }

        stage('Build Next.js') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to VPS') {
            when {
                branch 'main'
            }

            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: '44th-rof-site-deploy',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    )
                ]) {
                    sh '''
                        set -eu

                        ssh \
                            -i "$SSH_KEY" \
                            -p 28190 \
                            -o BatchMode=yes \
                            -o IdentitiesOnly=yes \
                            -o StrictHostKeyChecking=yes \
                            "$SSH_USER@admin.nelson.co.uk" \
                            "cd /home/adminhendersonnelson/44th-rof-site &&
                             git fetch origin main &&
                             git checkout main &&
                             git reset --hard $GIT_COMMIT &&
                             docker compose build web &&
                             docker compose up -d --no-deps web"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '44th Holdfast: CI passed and deployment completed where applicable!'
        }

        failure {
            echo 'Pipeline failed. Check the stage logs.'
        }
    }
}
