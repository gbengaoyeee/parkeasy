export type StaffOption = 'building_manager' | 'finance_accountant' | 'building_concierge'
export const staffOptions: Record<StaffOption, string> = {
    'building_manager': 'Building Manager',
    'finance_accountant': 'Finance Accountant',
    'building_concierge': 'Building Concierge'
};

export type BuildingType = 'residential' | 'commercial' | 'governmental'
export const buildingTypes: Record<BuildingType, string> = {
    'residential': 'Residential',
    'commercial': 'Commercial',
    'governmental': 'Governmental' 
};

export type BuildingFacility = 'ev_charging' | 'bulk_parking_owners' | 'smart_meters' | 
'anpr' | 'internet_wifi' | 'access_card_system' | 'visitor_parking' | 'bms' | 'handicapped_parking' | 'paid_parking_system'
export const buildingFacilities: Record<BuildingFacility, string> = {
    'ev_charging': 'EV Charging',
    'bulk_parking_owners': 'Bulk Parking Owners',
    'smart_meters': 'Smart Meters',
    'anpr': 'ANPR',
    'internet_wifi': 'Internet/Wifi',
    'access_card_system': 'Access Card System',
    'visitor_parking': 'Visitor Parking',
    'bms': 'BMS',
    'handicapped_parking': 'Handicapped Parking',
    'paid_parking_system': 'Paid Parking System',
}