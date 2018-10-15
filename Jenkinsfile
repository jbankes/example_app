pipeline {
    agent any

    stages {
        stage('Build') {
            when {
                branch 'master'
            }
            agent {
                docker {
                    image 'maven:3.5.4-jdk-8-alpine'
                    args '--mount \'type=bind,src=/var/lib/jenkins/maven_repo,dst=/root/.m2/repository\''
                    reuseNode true
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
                    args '--mount \'type=bind,src=/var/lib/jenkins/maven_repo,dst=/root/.m2/repository\''
                    reuseNode true
                }
            }
            steps {
                sh 'mvn com.smartbear.soapui:soapui-maven-plugin:5.4.0:test'
            }
        }
    }
}
