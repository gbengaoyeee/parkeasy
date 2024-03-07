#main.tf
#defining the provider as aws
provider "aws" {
    region     = "${var.region}"
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
}

#create a RDS Database Instance
resource "aws_db_instance" "parkeasy-db-dev" {
  engine               = "Postgres"
  identifier           = "parkeasy-db-dev"
  allocated_storage    =  20
  engine_version       = "15.4"
  instance_class       = "db.t3.micro"
  username             = "${var.db-dev-username}"
  password             = "${var.db-dev-password}"
  skip_final_snapshot  = true
  publicly_accessible =  true
  db_name = "parkeasydevdb"
}

#create a ElastiCache Redis Cluster
resource "aws_elasticache_cluster" "redis_db-dev" {
  cluster_id           = "redis-db-dev"
  engine               = "redis"
  node_type            = "cache.m4.large"
  num_cache_nodes      = 1
  port                 = 6379
  tags = {
    Name = "myredisclusterdev"
  }
}

resource "aws_instance" "parkeasy-ec2-dev" {
  ami           = "ami-07d9b9ddc6cd8dd30"
  instance_type = "t2.micro"
  key_name = "parkeasy-ec2-dev-key"
  vpc_security_group_ids = ["sg-0ea6836ce2678c64d"]
  tags = {
    Name = "Parkeasy EC2 Dev"
  }
}