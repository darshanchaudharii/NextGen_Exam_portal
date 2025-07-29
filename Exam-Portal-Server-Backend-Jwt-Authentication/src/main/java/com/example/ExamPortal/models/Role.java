package com.example.ExamPortal.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
/*
 * The Role class represents a user role in the Exam Portal application.
 * Each role has a unique ID and a name (such as "ADMIN" or "USER").
 * This entity is mapped to the "roles" table in the database.
 * It also maintains a set of UserRole relationships, which link users to their roles.
 */

@Entity// Marks this class as a JPA entit
@Table(name = "roles")// Maps this entity to the "roles" table
public class Role {
	@Id // Primary key for the Role entity
	private Long roleId;
	private String roleName; // Name of the role (e.g., ADMIN, USER)
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "role")
	private Set<UserRole>userRoles=new HashSet<>();
	// Set of user-role relationships

	public Role() {
		 // Default constructor
	}

	public Role(Long roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}
	
	// Getter and setter for userRoles
	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

	public Long getRoleId() {
		return roleId;
	}
	// Getter and setter for roleId
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	// Getter and setter for roleName
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
}
