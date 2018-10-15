pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'maven:3.5.4-jdk-8-alpine'
                }
            }
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                echo 'SoapUI will go here'
            }
        }
    }
}
