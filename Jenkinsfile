pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'maven:3.5.4-jdk-8-alpine'
                    args '-v -v maven-repo:/root/.m2'
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
