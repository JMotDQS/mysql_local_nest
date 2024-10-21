import { Injectable } from '@nestjs/common';

@Injectable()
export class LotsService {
	private lots = [
		{
			"pk_id" : "641a387e-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "AAA South",
			"lot_address" : "1 Auto Club Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a52a8-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Advertising",
			"lot_address" : "550 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 900,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a54bd-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "American Axle North",
			"lot_address" : "9541 Dequindre",
			"lot_city" : "Hamtramck",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48212",
			"lot_capacity" : 2650,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a560f-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Bulk Storage",
			"lot_address" : "5751 W Jefferson Ave",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48209",
			"lot_capacity" : 1000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a5768-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Borman",
			"lot_address" : "18718 Borman St",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48228",
			"lot_capacity" : 3000,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a58e3-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Cabot",
			"lot_address" : "4815 Cabot St",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48210",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a5aa5-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Carvana",
			"lot_address" : "6301 Wyoming",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a5c2a-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "DSC",
			"lot_address" : "1800 Fairlane Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48101",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a5e65-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Ecorse",
			"lot_address" : "3869 W Jefferson",
			"lot_city" : "Ecorse",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48229",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6053-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Edward",
			"lot_address" : "600 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 850,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a62a0-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Enright",
			"lot_address" : "15700 Lundy Parkway",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 900,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6455-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "FactoryZero - Rail",
			"lot_address" : "550 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 1500,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585da26c-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a65ce-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "FactoryZero - Storage",
			"lot_address" : "550 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 2500,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585da26c-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6779-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Fairlane",
			"lot_address" : "1303 Fairlane Circle",
			"lot_city" : "Allen Park",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48101",
			"lot_capacity" : 1000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a68cd-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Flat Rock Manheim",
			"lot_address" : "29500 Gateway Blvd",
			"lot_city" : "Flat Rock",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48314",
			"lot_capacity" : 2000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6a2e-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "FOC",
			"lot_address" : "5005 Mercury Dr",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 900,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6bad-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Huber",
			"lot_address" : "550 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 3000,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585da26c-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6cf1-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Hyatt",
			"lot_address" : "570 Town Center Dr",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 525,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6e47-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "ITEK",
			"lot_address" : "15575 Lundy Pkwy",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 2250,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a6fa8-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Kmart",
			"lot_address" : "21001 Van Born Rd",
			"lot_city" : "Taylor",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48180",
			"lot_capacity" : 1000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7157-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Lansing",
			"lot_address" : "2644 W Willow Hwy",
			"lot_city" : "Lansing",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48917",
			"lot_capacity" : 3000,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585da26c-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a72d3-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "MapAD",
			"lot_address" : "5909 Bellville Rd",
			"lot_city" : "Van Buren Twp",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48111",
			"lot_capacity" : 2500,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7403-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Marathon",
			"lot_address" : "3691 Greenfield Rd",
			"lot_city" : "Melvindale",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48122",
			"lot_capacity" : 970,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a754d-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "McClouth",
			"lot_address" : "1491 W Jefferson",
			"lot_city" : "Trenton",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48183",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a76cd-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Mellville",
			"lot_address" : "8100 Mellville",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48209",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7850-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "MIS",
			"lot_address" : "12626 US-12",
			"lot_city" : "Brooklyn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "49209",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7989-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "ODC Jefferson",
			"lot_address" : "7701 W Jefferson Ave",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48209",
			"lot_capacity" : 2000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7ac9-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Park &amp; Jet",
			"lot_address" : "31875 Smith Rd",
			"lot_city" : "Romulus",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48174",
			"lot_capacity" : 1000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7d95-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Park 2 Fly",
			"lot_address" : "8715 Wickham Rd",
			"lot_city" : "Romulus",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48174",
			"lot_capacity" : 1150,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a7f10-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Parts Galore",
			"lot_address" : "14533 Telegraph Rd",
			"lot_city" : "Flat Rock",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48134",
			"lot_capacity" : 2350,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8033-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Regent Court",
			"lot_address" : "16800 Executive Plaza Dr",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 1400,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8162-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Romeo Engine Plant",
			"lot_address" : "32 Mile Rd",
			"lot_city" : "Romeo",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48065",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a82d0-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Telegraph",
			"lot_address" : "10101 Telegraph Rd",
			"lot_city" : "Carleton",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48117",
			"lot_capacity" : 1550,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a841f-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Tireman",
			"lot_address" : "5945 Tireman",
			"lot_city" : "Detroit",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48204",
			"lot_capacity" : 1000,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a85a0-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "US Steel",
			"lot_address" : "530 East Grate Lakes St",
			"lot_city" : "River Rouge",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48218",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a870c-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Winfield",
			"lot_address" : "550 Town Center Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 3000,
			"lot_active" : "1",
			"fk_manufacturers_pk_id" : "585da26c-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a88ac-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "World Head Quarters",
			"lot_address" : "4751 Mercury Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8a65-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Wyoming",
			"lot_address" : "777 Bowles",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 3350,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8bd3-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Wyoming 2",
			"lot_address" : "6201 Wyoming St",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8d2e-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Ypsilanti",
			"lot_address" : "188 Spring St",
			"lot_city" : "Ypsilanti",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48197",
			"lot_capacity" : 1500,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		}
	]

	findAll() {
		return this.lots;
	}

	findOne(pk_id: string) {
		const lot = this.lots.find(lot => lot.pk_id === pk_id);
		return lot;
	}

	create(lot: {created_date: string, lot_name: string, lot_address: string, lot_city: string,  fk_g_states_pk_id: string, lot_zip: string, lot_capacity: number, lot_active: string, fk_manufacturers_pk_id: string}) {
		const lotNewId = '641e1b7761b-' + Math.random();
		const newLot = {
			pk_id: lotNewId,
			...lot
		}
		this.lots.push(newLot);
		return newLot;
	}

	update(pk_id: string, updatedLot: {created_date?: string, lot_name?: string, lot_address?: string, lot_city?: string,  fk_g_states_pk_id?: string, lot_zip?: string, lot_capacity?: number, lot_active?: string, fk_manufacturers_pk_id?: string}) {
		this.lots = this.lots.map(lot => {
			if(lot.pk_id === pk_id) {
				return { ...lot, ...updatedLot };
			}
			return lot;
		})
		return this.findOne(pk_id);
	}

	delete(pk_id: string) {
		const removedLot = this.findOne(pk_id);
		this.lots.filter(lot => lot.pk_id !== pk_id);
		return removedLot;
	}
}
