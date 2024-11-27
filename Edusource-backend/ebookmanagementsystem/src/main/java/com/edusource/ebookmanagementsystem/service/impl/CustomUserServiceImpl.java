package com.edusource.ebookmanagementsystem.service.impl;

import com.edusource.ebookmanagementsystem.domain.USER_ROLE;
import com.edusource.ebookmanagementsystem.model.Author;
import com.edusource.ebookmanagementsystem.model.User;
import com.edusource.ebookmanagementsystem.repository.AuthorRepository;
import com.edusource.ebookmanagementsystem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthorRepository authorRepository;

    private static final String AUTHOR_PREFIX="author_";



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(username.startsWith(AUTHOR_PREFIX)){
            String actualUsername=username.substring(AUTHOR_PREFIX.length());
            Author author=authorRepository.findByEmail(actualUsername);
            if(author!=null){
                return buildUserDetails(author.getEmail(),author.getPassword(),author.getRole());
            }
        }
        else{
            User user=userRepository.findByEmail(username);
            if(user!=null){
                return buildUserDetails(user.getEmail(),user.getPassword(),user.getRole());
            }
        }
        throw new UsernameNotFoundException("Reader or Author not found with username "+username);
    }

    private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {
        if(role==null) {
            role = USER_ROLE.ROLE_READER;
            List<GrantedAuthority> authorityList = new ArrayList<>();
            authorityList.add(new SimpleGrantedAuthority("ROLE" + role));

            return new org.springframework.security.core.userdetails.User(email,password,authorityList);
    }
        return null;
}}
