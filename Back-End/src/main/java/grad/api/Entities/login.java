package grad.api.Entities;

import java.util.Date;

import javax.persistence.*;

@Entity
public class login {

	private int id ;
	private int user_id;
	private String  username;
	private String password;
	private String type;

	
	
	
	
	
	public login() {
		super();

	}

	
	
	
	
	

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
	public int getId() {
		return id;
	}







	public void setId(int id) {
		this.id = id;
	}







	public int getUser_id() {
		return user_id;
	}







	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}







	public login(int user_id, String username, String password, String type) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.type = type;

	}







	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	
	
	
	
}
