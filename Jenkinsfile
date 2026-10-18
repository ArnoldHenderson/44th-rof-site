
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
    }

    post {
        success {
            echo '44th Holdfast: CI passed!'
        }

        failure {
            echo 'CI failed. Check the stage logs.'
        }
    }
}
