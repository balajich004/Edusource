package com.edusource.ebookmanagementsystem.controller;

import com.edusource.ebookmanagementsystem.domain.USER_ROLE;
import com.edusource.ebookmanagementsystem.model.User;
import com.edusource.ebookmanagementsystem.repository.UserRepository;
import com.edusource.ebookmanagementsystem.response.SignupRequest;
import com.edusource.ebookmanagementsystem.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
//@RequiredArgsConstructor
public class AuthController {
    @Autowired
    private final UserRepository userRepository;

    private final AuthService authService;

    public AuthController(UserRepository userRepository, AuthService authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest signupRequest){
        String jwt=authService.createUser(signupRequest);
        AuthResponse response=new AuthResponse();
        response.setJwt(jwt);
        response.setMessage("successfully registered");
        response.setRole(USER_ROLE.ROLE_READER);
        return ResponseEntity.ok(response);
    }
}
