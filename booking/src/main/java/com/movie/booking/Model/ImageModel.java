//package com.movie.booking.Model;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "ImageModel")
//public class ImageModel {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private long id;
//	private String name;
//	private String type;
//	@Column(length= 50000000)
//	private byte[] picByte;
//	
//	public ImageModel() {
//		super();
//	}
//	public ImageModel(String name, String type, byte[] picByte) {
//		super();
////		this.id = id;
//		this.name = name;
//		this.type = type;
//		this.picByte = picByte;
//	}
//	public long getId() {
//		return id;
//	}
//	public void setId(long id) {
//		this.id = id;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getType() {
//		return type;
//	}
//	public void setType(String type) {
//		this.type = type;
//	}
//	public byte[] getPicByte() {
//		return picByte;
//	}
//	public void setPicByte(byte[] picByte) {
//		this.picByte = picByte;
//	}
//	
//	
//
//}
