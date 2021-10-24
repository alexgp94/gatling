pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo "Build Step"
				sh 'mvn clean && mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.ProductsMF'
            }
        }
        stage('Metrics') { 
            steps {
                echo "Metrics"
                sh ' DIR_NAME=$(cat /var/lib/jenkins/workspace/gatling_AlexRepo/target/gatling/lastRun.txt) && mv /var/lib/jenkins/workspace/gatling_AlexRepo/target/gatling/$DIR_NAME /var/www/html/ && echo http://3.101.130.24/$DIR_NAME '
            }
        }
        stage('Deploy') { 
            steps {
                echo "Deploy Step"
            }
        }
    }
}
