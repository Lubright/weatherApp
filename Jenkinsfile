pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/stop-app.sh'
                sh './scripts/start-app.sh'
            }
        }
    }
}