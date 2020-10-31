/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.Entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */
@JsonIgnoreProperties({"task_list"})
@Entity
public class employee {

    private int emp_id ;
    private String emp_fname;
    private String emp_lname;
    private String emp_username;
    private String emp_passwd;
    private String emp_email;
    private Double emp_salary;
    private String emp_phone;
    private String emp_Bdate;
    private Date emp_Regist_date;
    private String emp_city;
    private String emp_country;
    private String emp_distr;
    private Double emp_long;
    private Double emp_lat;
    private List<task> task_list= new ArrayList<task>();   
    public employee() {
    }

    public employee(
            String emp_fname, String emp_lname, String emp_username, String emp_passwd, String emp_email, Double emp_salary, String emp_phone, String emp_Bdate, Date emp_Regist_date, String emp_city, String emp_country, String emp_distr, Double emp_long, Double emp_lat) {
    
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_username = emp_username;
        this.emp_passwd = emp_passwd;
        this.emp_email = emp_email;
        this.emp_salary = emp_salary;
        this.emp_phone = emp_phone;
        this.emp_Bdate = emp_Bdate;
        this.emp_Regist_date = emp_Regist_date;
        this.emp_city = emp_city;
        this.emp_country = emp_country;
        this.emp_distr = emp_distr;
        this.emp_long = emp_long;
        this.emp_lat = emp_lat;
    }

    @Id
    @GeneratedValue (strategy=GenerationType.AUTO)
    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_fname() {
        return emp_fname;
    }

    public void setEmp_fname(String emp_fname) {
        this.emp_fname = emp_fname;
    }

    public String getEmp_lname() {
        return emp_lname;
    }

    public void setEmp_lname(String emp_lname) {
        this.emp_lname = emp_lname;
    }

    public String getEmp_username() {
        return emp_username;
    }

    public void setEmp_username(String emp_username) {
        this.emp_username = emp_username;
    }

    public String getEmp_passwd() {
        return emp_passwd;
    }

    public void setEmp_passwd(String emp_passwd) {
        this.emp_passwd = emp_passwd;
    }

    public String getEmp_email() {
        return emp_email;
    }

    public void setEmp_email(String emp_email) {
        this.emp_email = emp_email;
    }

    public Double getEmp_salary() {
        return emp_salary;
    }

    public void setEmp_salary(Double emp_salary) {
        this.emp_salary = emp_salary;
    }

    public String getEmp_phone() {
        return emp_phone;
    }

    public void setEmp_phone(String emp_phone) {
        this.emp_phone = emp_phone;
    }

    public String getEmp_Bdate() {
        return emp_Bdate;
    }

    public void setEmp_Bdate(String emp_Bdate) {
        this.emp_Bdate = emp_Bdate;
    }

    public Date getEmp_Regist_date() {
        return emp_Regist_date;
    }

    public void setEmp_Regist_date(Date emp_Regist_date) {
        this.emp_Regist_date = emp_Regist_date;
    }

    public String getEmp_city() {
        return emp_city;
    }

    public void setEmp_city(String emp_city) {
        this.emp_city = emp_city;
    }

    public String getEmp_country() {
        return emp_country;
    }

    public void setEmp_country(String emp_country) {
        this.emp_country = emp_country;
    }

    public String getEmp_distr() {
        return emp_distr;
    }

    public void setEmp_distr(String emp_distr) {
        this.emp_distr = emp_distr;
    }

    public Double getEmp_long() {
        return emp_long;
    }

    public void setEmp_long(Double emp_long) {
        this.emp_long = emp_long;
    }

    public Double getEmp_lat() {
        return emp_lat;
    }

    public void setEmp_lat(Double emp_lat) {
        this.emp_lat = emp_lat;
    }

    
    @OneToMany (cascade = CascadeType.ALL , targetEntity = task.class)
//    @JoinTable (name = "task_empl" , joinColumns = {@JoinColumn(name="emp-id")},inverseJoinColumns = {@JoinColumn(name="task_id")} )
    public List<task> getTask_list() {
        return task_list;
    }

    public void setTask_list(List<task> task_list) {
        this.task_list = task_list;
    }
    
    
    
    
    
}
