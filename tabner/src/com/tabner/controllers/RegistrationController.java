package com.tabner.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tabner.models.UserModel;

@RestController
@CrossOrigin
public class RegistrationController {
	
	List<UserModel> userModel=new ArrayList<UserModel>();

	@RequestMapping(value = "/")
	public String showHome() {
		return "home"; //for testng purpose 
	}
	
	@RequestMapping( 
			value="/users",
			method=RequestMethod.POST,
			produces="application/json",
			consumes="application/json"
			)
	public List<UserModel> saveUsers(@RequestBody UserModel userModel) {
		System.out.println("Entry:RegistrationController=>"+userModel);
		this.userModel.add(userModel);	//saved
		return this.userModel;
	}
	
	@RequestMapping(
			value="/userslist",
			method=RequestMethod.GET,
			produces="application/json"
			)
	public List<UserModel> getUsers() { 
		if(this.userModel!=null)
		return this.userModel; //returning the saved one
		
		List<UserModel> userModel =new ArrayList<>();
		return userModel;
	} 
	

}
