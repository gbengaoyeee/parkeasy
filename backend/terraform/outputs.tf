output "db_instance_endpoint" {
  value       = aws_db_instance.parkeasy-db-dev.endpoint
}

output "elasticache_cluster_endpoint_dev" {
  value       = aws_elasticache_cluster.redis_db-dev.arn
}