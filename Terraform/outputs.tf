output "website_url" {
  value = aws_s3_bucket_website_configuration.erp_site.website_endpoint
}