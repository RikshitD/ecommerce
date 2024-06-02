pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                checkout scm
            }
        }
        
        stage('Unit Tests') {
            steps {
                // Install dependencies and run unit tests with Jest
                sh 'npm install'
                sh 'npm test'
            }
        }
        
        stage('Integration Tests') {
            steps {
                // Run integration tests
                sh 'npm run integration-test'
            }
        }
        
        stage('Build') {
            steps {
                // Perform any necessary build steps
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy your application
                // Replace this with your actual deployment command
                sh 'npm run deploy'
            }
        }
    }
    
    post {
        always {
            // Archive artifacts
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            
            // Publish test results
            junit 'reports/**/*.xml'
        }
    }
}

