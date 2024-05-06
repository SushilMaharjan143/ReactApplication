using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ReactApplication.Server.Models;

public partial class StoresContext : DbContext
{
    
    public StoresContext(DbContextOptions<StoresContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; } = null!;

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<Store> Stores { get; set; }

    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.ToTable("Customer");

            entity.Property(k => k.Address)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(k => k.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.HasKey(k => k.Id);

        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("Product");

            entity.Property(k => k.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(k => k.Price).HasColumnType("money");
            entity.HasKey(k => k.Id);
        });

        modelBuilder.Entity<Store>(entity =>
        {
            entity.Property(k => k.Address)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(k => k.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.HasKey(k => k.Id);
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.HasKey(k => k.Id);
            entity.HasOne(s => s.Product)
                .WithMany()
                .HasForeignKey(s => s.ProductId);
            entity.HasOne(s => s.Customer)
                .WithMany()
                .HasForeignKey(s => s.CustomerId);
            entity.HasOne(s => s.Store)
                .WithMany()
                .HasForeignKey(s => s.StoreId);
        });


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
