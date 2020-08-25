pipeline {
  agent any
  stages {
    stage('Lint HTML') {
      steps {
        sh 'tidy -q -e *.html'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t pawankolhe/udacity-capstone .'
      }
    }
    stage('Push Docker Image') {
      steps {
        withDockerRegistry([url: "", credentialsId: "dockerhub"]) {
          sh "docker tag pawankolhe/udacity-capstone pawankolhe/udacity-capstone:latest"
          sh 'docker push pawankolhe/udacity-capstone:latest'
        }
      }
    }
    stage('Deploying') {
      steps{
        echo 'Deploying to AWS...'
        withAWS(credentials: 'aws-credentials', region: 'us-west-2') {
          sh "aws eks --region us-west-2 update-kubeconfig --name udacityjenkins"
          sh "kubectl config use-context arn:aws:eks:us-west-2:396759207952:cluster/udacityjenkins"
          sh "kubectl set image deployments/capstone-project-cloud-devops capstone-project-cloud-devops=sabbir33/capstone-project-cloud-devops:latest"
          sh "kubectl apply -f deployment/deployment.yml"
          sh "kubectl get nodes"
          sh "kubectl get deployment"
          sh "kubectl get pod -o wide"
          sh "kubectl get service/capstone-project-cloud-devops"
        }
      }
    }
    stage("Cleaning up") {
      steps{
        echo 'Cleaning up...'
        sh "docker system prune"
      }
    }
  }
}
