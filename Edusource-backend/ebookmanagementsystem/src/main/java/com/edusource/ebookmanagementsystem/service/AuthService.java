package com.edusource.ebookmanagementsystem.service;

import com.edusource.ebookmanagementsystem.response.SignupRequest;

public interface AuthService {
    String createUser(SignupRequest req);
}
