# Cloud Native Orchestration 
_Udacity Cloud DevOps Capstone Project_

In this project, I applied the skills and knowledge which was developed throughout the [Udacity Cloud DevOps Engineer Nanodegree](https://www.udacity.com/course/cloud-dev-ops-nanodegree--nd9991) program. These include:

- Working in AWS
- Using Jenkins to implement Continuous Integration and Continuous Deployment
- Building pipelines
- Working with Ansible and CloudFormation to deploy clusters
- Building Kubernetes clusters
- Building Docker containers in pipelines

## Scope
I have deployed a node application which is a demo website of a [JavaScript library](https://www.npmjs.com/package/color-calendar) that I've built. The application source code is in the `/src` folder and the build output is in `/dist` folder.

The purpose of this project is to develop a CI/CD pipeline for my application with rolling deployment strategy.

Continuous Integration will include checking the GitHub repo for new commits and perform typographical checking (aka “**linting**”) on the HTML.

Continuous Deployment will include pushing the built Docker container to the **Docker** repository using **AWS ECR**. Next I have deployed these Docker container(s) to a small Kubernetes cluster using **AWS EKS** (AWS Kubernetes as a Service). To deploy the kubernetes cluster I have used **Cloudformation**.

These tasks will be run through a **Jenkins** pipeline which is running on an EC2 instance.

![Diagram](https://raw.githubusercontent.com/PawanKolhe/cloud-devops-capstone/master/screenshots/Diagram.png)

## Screenshots
- `1-AWS-Jenkins-and-EKS-Instances`: Jenkins EC2 Instance manually created and the 3 other EC2 instances created by CloudFormation.
- `2-AWS-EKS-Cluster-ready`: Started EKS Cluster
- `3-Installing-Docker`: Docker installed on Ubuntu 18.04 LTS
- `4-Jenkins-Dashboard`: Jenkins up and running
- `5-EKS-Node-Group`: EKS Cluster and Node Groups created
- `6-CloudFormation-NodeGroup-Stack`: Node Group stack created by CloudFormation
- `7-Application-Running`: Application is up and running on endpoint of Load Balancer
- `8-Pipeline-Successfully-Finished`: Jenkins pipeline ran successfully
- `9-HTML-Lint-Pass`: HTML linting passing
- `10-HTML-Lint-Fail`: HTML linting failing when writing incorrect HTML
- `11-Load-Balancer`: Load Balancer up and running
- `12-Kubenetes-Output`: Output including endpoint of application when application successfully deployed
- `13-Pipeline-Triggers`: Many attempts before finally getting the pipeline working
