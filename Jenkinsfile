pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'maven:3.5.4-jdk-8-alpine'
                    args '-v maven-repo:/root/.m2'
                }
            }
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Soap UI') {
            agent {
                docker {
                    image 'maven:3.5.4-jdk-8-alpine'
                    args '-v maven-repo:/root/.m2'
                }
            }
            steps {
                sh 'mvn com.smartbear.soapui:soapui-maven-plugin:5.4.0:test'
            }
        }
    }
}
