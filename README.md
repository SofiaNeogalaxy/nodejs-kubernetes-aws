# Node.js Application with Kubernetes and AWS
This project deploy a Node.js application on a Kubernetes cluster on AWS, with a MySQL database hosted on Amazon RDS. The application provides basic CRUD operations on a database table and uses the AWS SDK to access S3 buckets.

## Prerequisites
Before you begin, you'll need the following:

- Docker
- Kubernetes cluster on AWS
- Amazon RDS instance with a MySQL database
- AWS S3 bucket
- AWS access keys with sufficient permissions

Getting Started
To get started, clone this repository to your local machine:

```bash
git clone https://github.com/SofiaNeogalaxy/nodejs-kubernetes-aws.git
```
Next, create a Docker image of the Node.js application:

```php
docker build -t sofianeogalaxy/node-app-pod:latest .
```
Push the Docker image to your Docker Hub repository:

```php
docker push sofianeogalaxy/node-app-pod:latest
```
Create a Kubernetes secret with your AWS access keys:

```vbnet
kubectl create secret generic app-secrets \
  --from-literal=AWS_ACCESS_KEY=<AWS access key> \
  --from-literal=AWS_SECRET_KEY=<AWS secret key> \
  --from-literal=AWS_REGION=<AWS region>
  ```
Deploy the application to the Kubernetes cluster:

```vbnet
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
You can access the application using the LoadBalancer URL provided by the service.yaml file.
