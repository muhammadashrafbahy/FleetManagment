/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.Entities;

import java.sql.Date;
import javax.persistence.*;
import javax.validation.constraints.*;


/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */
@Entity
public class task {
 
    private int task_id;
    private Double task_long;
    private Double task_lat;
    private Date exp_date;
 
    private Date Start_date;   
    private String task_descript;
    private String task_name;
    private String task_address;
 
    private String client_name;
    
    private String state;
   
	private String emp_name;
	private int emp_id;
	
    private employee emp;
   
    
    

//	private clients cl;
//	

	public task() {
    }

   
	public task(String client_name,String state ,String emp_name,int emp_id, Double task_long, Double task_lat, Date Start_date, Date exp_date, String task_descript, String task_name, String task_address) {
       
        this.task_long = task_long;
        this.task_lat = task_lat;
        this.exp_date = exp_date;
        
        this.Start_date = Start_date;
        this.task_descript = task_descript;
        this.task_name = task_name;
        this.task_address=task_address;
       this.client_name =client_name;
       this.state=state;
       this.emp_name =emp_name;
       this.emp_id=emp_id;
    }
   @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    public int getTask_id() {
        return task_id;
    }

   
    public void setTask_id(int task_id) {
        this.task_id = task_id;
    }

 
    public Double getTask_long() {
        return task_long;
    }

    public void setTask_long(Double task_long) {
        this.task_long = task_long;
    }

    public Double getTask_lat() {
        return task_lat;
    }

    public void setTask_lat(Double task_lat) {
        this.task_lat = task_lat;
    }

    
 
    public Date getExp_date() {
        return exp_date;
    }

    public void setExp_date(Date exp_date) {
        this.exp_date = exp_date;
    }
    
    
  
    public Date getStart_date() {
        return Start_date;
    }

    public void setStart_date(Date Start_date) {
        this.Start_date = Start_date;
    }

    
    
    public String getTask_descript() {
        return task_descript;
    }

    public void setTask_descript(String task_descript) {
        this.task_descript = task_descript;
    }

     
    
    public String getTask_name() {
        return task_name;
    }

    public void setTask_name(String task_name) {
        this.task_name = task_name;
    }
    
    

    public String getTask_address() {
		return task_address;
	}


	public void setTask_address(String task_address) {
		this.task_address = task_address;
	}


	public String getClient_name() {
        return client_name;
    }

    public void setClient_name(String client_name) {
        this.client_name = client_name;
    }

	public String getEmp_name() {
		return emp_name;
	}

	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}
	
	
	 public String getState() {
			return state;
		}

		public void setState(String state) {
			this.state = state;
		}
		
		

    public int getEmp_id() {
			return emp_id;
		}


		public void setEmp_id(int emp_id) {
			this.emp_id = emp_id;
		}


	@ManyToOne (cascade = CascadeType.ALL , targetEntity=employee.class)
    public employee getEmp() {
		return emp;
	}

	public void setEmp(employee emp) {
		this.emp = emp;
	}
	

}
