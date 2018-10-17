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
                sh 'cd soap-runner && mvn clean test -DprojectFile=soapui-project.xml'
            }
        }
    }
}
