package com.edusource.ebookmanagementsystem.model;

import com.edusource.ebookmanagementsystem.domain.AccountStatus;
import com.edusource.ebookmanagementsystem.domain.USER_ROLE;
import jakarta.persistence.*;

@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String authorName;

    private String mobile;

    @Column(unique = true,nullable = false)
    private String email;
    private String password;

    private USER_ROLE role=USER_ROLE.ROLE_AUTHOR;

    public AccountStatus getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isEmailVerified() {
        return isEmailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        isEmailVerified = emailVerified;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public USER_ROLE getRole() {
        return role;
    }

    public void setRole(USER_ROLE role) {
        this.role = role;
    }

    private boolean isEmailVerified=false;

    private AccountStatus accountStatus= AccountStatus.PENDING_VERIFICATION;

//    public AuthorDetails getAuthorDetails() {
//        return authorDetails;
//    }
//
//    public void setAuthorDetails(AuthorDetails authorDetails) {
//        this.authorDetails = authorDetails;
//    }

//    private AuthorDetails authorDetails=new AuthorDetails();
}
