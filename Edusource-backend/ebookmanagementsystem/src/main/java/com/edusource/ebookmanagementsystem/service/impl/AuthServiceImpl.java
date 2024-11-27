package com.edusource.ebookmanagementsystem.service.impl;

import com.edusource.ebookmanagementsystem.config.JWTProvider;
import com.edusource.ebookmanagementsystem.domain.USER_ROLE;
import com.edusource.ebookmanagementsystem.model.User;
import com.edusource.ebookmanagementsystem.repository.UserRepository;
import com.edusource.ebookmanagementsystem.response.SignupRequest;
import com.edusource.ebookmanagementsystem.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final JWTProvider jwtProvider;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JWTProvider jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public String createUser(SignupRequest req) {
        User user=userRepository.findByEmail(req.getEmail());
        if(user==null){
            User createdUser=new User();
            createdUser.setFullname(req.getFullName());
            createdUser.setEmail(req.getEmail());
            createdUser.setMobileno("7894561230");
            createdUser.setRole(USER_ROLE.ROLE_READER);
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));
            user=userRepository.save(createdUser);
        }
        List<GrantedAuthority> authorities=new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_READER.toString()));
        Authentication authentication=new UsernamePasswordAuthenticationToken(req.getEmail(),null,authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtProvider.generateToken(authentication);
    }
}
