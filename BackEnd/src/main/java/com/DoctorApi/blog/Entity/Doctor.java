package com.DoctorApi.blog.Entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="doctors")
@NoArgsConstructor
@Getter
@Setter
public class Doctor {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private int doctorId;
	
      private String doctorName;
      private String doctorEmail;
      private String password;
      private String doctorPhoneNumber;
      private String doctorEducation;
      private String doctorePhoto;
      private String doctorCategory;
      private boolean paymentStatus;
      private String doctorVisitingCharges;
      private boolean prescriptionStatus;
      
      @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
      private Set<Patient> patients = new HashSet<>();
      
    
}
