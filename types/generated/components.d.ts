import type { Schema, Struct } from '@strapi/strapi';

export interface AircondsAirconds extends Struct.ComponentSchema {
  collectionName: 'components_airconds_airconds';
  info: {
    description: '';
    displayName: 'airconds';
  };
  attributes: {
    airflow: Schema.Attribute.String;
    cooling_btu: Schema.Attribute.String;
    cooling_kw: Schema.Attribute.String;
    energy_output: Schema.Attribute.String;
    freon: Schema.Attribute.String;
    heating_btu: Schema.Attribute.String;
    heating_kw: Schema.Attribute.String;
    m2: Schema.Attribute.String;
    m3: Schema.Attribute.String;
    noise_inner: Schema.Attribute.String;
    noise_outer: Schema.Attribute.String;
    route_diameter: Schema.Attribute.String;
    route_length: Schema.Attribute.String;
    size_inner: Schema.Attribute.String;
    size_outer: Schema.Attribute.String;
    temperature: Schema.Attribute.String;
    weight_inner: Schema.Attribute.String;
    weight_outer: Schema.Attribute.String;
  };
}

export interface BoilersBoilers extends Struct.ComponentSchema {
  collectionName: 'components_boilers_boilers';
  info: {
    description: '';
    displayName: 'boilers';
  };
  attributes: {
    combustion_chamber: Schema.Attribute.String;
    expansion_tank_vol: Schema.Attribute.String;
    gas_flowrate: Schema.Attribute.String;
    gas_pressure: Schema.Attribute.String;
    gas_valve_brand: Schema.Attribute.String;
    heat_water_25: Schema.Attribute.String;
    heat_water_30: Schema.Attribute.String;
    heating_source: Schema.Attribute.String;
    kpd: Schema.Attribute.String;
    max_heat_output: Schema.Attribute.String;
    max_min_gas_pressure: Schema.Attribute.String;
    nominal_voltage: Schema.Attribute.String;
    oxygen_supply: Schema.Attribute.String;
    performance: Schema.Attribute.String;
    pipe_diameter: Schema.Attribute.String;
    pipe_diameter_heat_water: Schema.Attribute.String;
    pipe_diameter_heating: Schema.Attribute.String;
    pump_brand: Schema.Attribute.String;
    size: Schema.Attribute.String;
    temp_range_heating: Schema.Attribute.String;
    temp_range_heating_heatWater: Schema.Attribute.String;
    working_pressure: Schema.Attribute.String;
  };
}

export interface CentrifugalChillersCentrifugalChillers
  extends Struct.ComponentSchema {
  collectionName: 'components_centrifugal_chillers_centrifugal_chillers';
  info: {
    description: '';
    displayName: 'centrifugal_chillers';
  };
  attributes: {
    compressor_type: Schema.Attribute.String;
    cooling_hpc_res: Schema.Attribute.String;
    cooling_hpc_water_cons: Schema.Attribute.String;
    cooling_hpe_res: Schema.Attribute.String;
    cooling_hpe_water_cons: Schema.Attribute.String;
    cooling_kw: Schema.Attribute.String;
    cooling_power_cons_nom: Schema.Attribute.String;
    cop: Schema.Attribute.String;
    eer: Schema.Attribute.String;
    engine_power_kw: Schema.Attribute.String;
    freon_type: Schema.Attribute.String;
    freon_value: Schema.Attribute.String;
    heating_hpc_res: Schema.Attribute.String;
    heating_hpc_water_cons: Schema.Attribute.String;
    heating_hpe_res: Schema.Attribute.String;
    heating_hpe_water_cons: Schema.Attribute.String;
    heating_kw: Schema.Attribute.String;
    heating_power_cons_nom: Schema.Attribute.String;
    hp_htc_pipe_diam: Schema.Attribute.String;
    hpe_pipe_diameter_mm: Schema.Attribute.String;
    hpe_type: Schema.Attribute.String;
    inrush_current_a: Schema.Attribute.String;
    iplv: Schema.Attribute.String;
    max_cons_voltage_a: Schema.Attribute.String;
    max_voltage_a: Schema.Attribute.String;
    noise: Schema.Attribute.String;
    nominal_voltage_a: Schema.Attribute.String;
    oper_weight_rhwe_ha: Schema.Attribute.String;
    oper_weight_rhwe_hab: Schema.Attribute.String;
    operating_weight: Schema.Attribute.String;
    powerSupply: Schema.Attribute.String;
    size: Schema.Attribute.String;
    weight: Schema.Attribute.String;
    weight_rhwe_ha: Schema.Attribute.String;
    weight_rhwe_hab: Schema.Attribute.String;
  };
}

export interface ChillersChillers extends Struct.ComponentSchema {
  collectionName: 'components_chillers_chillers';
  info: {
    description: '';
    displayName: 'chillers';
  };
  attributes: {
    automat_a: Schema.Attribute.String;
    compressor_brand: Schema.Attribute.String;
    compressor_quantity: Schema.Attribute.String;
    compressor_type: Schema.Attribute.String;
    cooling_kw: Schema.Attribute.String;
    cooling_power_cons_nom: Schema.Attribute.String;
    cop: Schema.Attribute.String;
    e_eff_class_35: Schema.Attribute.String;
    eer: Schema.Attribute.String;
    expansion_valve: Schema.Attribute.String;
    fan_type: Schema.Attribute.String;
    freon_type: Schema.Attribute.String;
    freon_value: Schema.Attribute.String;
    heat_energy_consumption_nom: Schema.Attribute.String;
    heat_exchanger: Schema.Attribute.String;
    heating_kw: Schema.Attribute.String;
    heating_power_cons_nom: Schema.Attribute.String;
    hpc_resistance_kpa: Schema.Attribute.String;
    hpc_water_consumption: Schema.Attribute.String;
    hpe_pipe_diameter: Schema.Attribute.String;
    hpe_pipe_diameter_mm: Schema.Attribute.String;
    hpe_resistance_kpa: Schema.Attribute.String;
    hpe_type: Schema.Attribute.String;
    hpe_water_consumption: Schema.Attribute.String;
    hpe_water_value: Schema.Attribute.String;
    hydraulic_resistance_kpa: Schema.Attribute.String;
    inrush_current: Schema.Attribute.String;
    max_energy_cons_a: Schema.Attribute.String;
    max_energy_cons_kw: Schema.Attribute.String;
    noise: Schema.Attribute.String;
    noise_power: Schema.Attribute.String;
    pipe_diameter: Schema.Attribute.String;
    powerSupply: Schema.Attribute.String;
    remote: Schema.Attribute.String;
    sizes: Schema.Attribute.String;
    sizes_package: Schema.Attribute.String;
    sound_pressure_level: Schema.Attribute.String;
    temp_cooling: Schema.Attribute.String;
    temp_heating: Schema.Attribute.String;
    temp_output_cooling: Schema.Attribute.String;
    temp_output_heating: Schema.Attribute.String;
    water_consumption: Schema.Attribute.String;
    water_flow_range: Schema.Attribute.String;
    weight: Schema.Attribute.String;
  };
}

export interface DehumidsDehumids extends Struct.ComponentSchema {
  collectionName: 'components_dehumids_dehumids';
  info: {
    displayName: 'dehumids';
  };
  attributes: {
    air_filter: Schema.Attribute.String;
    capacity: Schema.Attribute.String;
    circ_air_flow: Schema.Attribute.String;
    compressor: Schema.Attribute.String;
    consumption: Schema.Attribute.String;
    drenage: Schema.Attribute.String;
    freon: Schema.Attribute.String;
    input_nominal_power: Schema.Attribute.String;
    m2: Schema.Attribute.String;
    nominal_power: Schema.Attribute.String;
    performance: Schema.Attribute.String;
    power_supply: Schema.Attribute.String;
    size: Schema.Attribute.String;
    weight: Schema.Attribute.String;
    working_temp: Schema.Attribute.String;
  };
}

export interface FridgesFridges extends Struct.ComponentSchema {
  collectionName: 'components_fridges_fridges';
  info: {
    displayName: 'fridges';
  };
  attributes: {
    cable_length: Schema.Attribute.String;
    chambers_count: Schema.Attribute.String;
    cold_retention_hours: Schema.Attribute.String;
    color: Schema.Attribute.String;
    display: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    display_location: Schema.Attribute.String;
    door_opening_dir: Schema.Attribute.String;
    doors_count: Schema.Attribute.String;
    freezer_defrost: Schema.Attribute.String;
    freezer_location: Schema.Attribute.String;
    freezer_net_volume: Schema.Attribute.String;
    freezing_capacity: Schema.Attribute.String;
    freon: Schema.Attribute.String;
    fridge_defrost: Schema.Attribute.String;
    fridge_net_volume: Schema.Attribute.String;
    handle_type: Schema.Attribute.String;
    has_egg_tray: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_fresh_zone: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    has_ice_tray: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_included_panels: Schema.Attribute.String;
    has_smart_control: Schema.Attribute.String;
    is_inverter: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    is_panel_changeable: Schema.Attribute.String;
    is_reversible_doors: Schema.Attribute.String;
    max_freezer_temp: Schema.Attribute.String;
    max_fridge_temp: Schema.Attribute.String;
    min_freezer_temp: Schema.Attribute.String;
    min_fridge_temp: Schema.Attribute.String;
    noise: Schema.Attribute.String;
    surface_material: Schema.Attribute.String;
    temp_indication: Schema.Attribute.String;
    total_net_volume: Schema.Attribute.String;
    total_volume: Schema.Attribute.String;
    type: Schema.Attribute.String;
    zero_clearance: Schema.Attribute.String;
  };
}

export interface GeneralParamsGeneralParams extends Struct.ComponentSchema {
  collectionName: 'components_general_params_general_params';
  info: {
    displayName: 'general_params';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface HeatCurtainsHeatCurtains extends Struct.ComponentSchema {
  collectionName: 'components_heat_curtains_heat_curtains';
  info: {
    displayName: 'heat-curtains';
  };
  attributes: {
    air_velocity: Schema.Attribute.String;
    airflow: Schema.Attribute.String;
    consumption: Schema.Attribute.String;
    power_supply: Schema.Attribute.String;
    size: Schema.Attribute.String;
    temp_output: Schema.Attribute.String;
  };
}

export interface HumidifiersHumidifiers extends Struct.ComponentSchema {
  collectionName: 'components_humidifiers_humidifiers';
  info: {
    displayName: 'humidifiers';
  };
  attributes: {
    airflow: Schema.Attribute.String;
    anions: Schema.Attribute.String;
    cable_length: Schema.Attribute.String;
    degree_oscil: Schema.Attribute.String;
    engine_speed: Schema.Attribute.String;
    filter_replacement: Schema.Attribute.String;
    formaldehyde: Schema.Attribute.String;
    m2: Schema.Attribute.String;
    max_spray_vol: Schema.Attribute.String;
    noise_min: Schema.Attribute.String;
    nominal_frequency: Schema.Attribute.String;
    nominal_power: Schema.Attribute.String;
    particle_removal: Schema.Attribute.String;
    rated_power: Schema.Attribute.String;
    size: Schema.Attribute.String;
    tank_capacity: Schema.Attribute.String;
    weight: Schema.Attribute.String;
  };
}

export interface ImgDescriptionImgDescription extends Struct.ComponentSchema {
  collectionName: 'components_img_description_img_descriptions';
  info: {
    description: '';
    displayName: 'img_description';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text: Schema.Attribute.RichText;
  };
}

export interface ParamsOtherParamsOther extends Struct.ComponentSchema {
  collectionName: 'components_params_other_params_others';
  info: {
    description: '';
    displayName: 'params_other';
  };
  attributes: {
    boilers: Schema.Attribute.Component<'boilers.boilers', false>;
    dehumids: Schema.Attribute.Component<'dehumids.dehumids', false>;
    fridges: Schema.Attribute.Component<'fridges.fridges', false>;
    humids: Schema.Attribute.Component<'humidifiers.humidifiers', false>;
    washes: Schema.Attribute.Component<'washes.washes', false>;
  };
}

export interface ParamsParametry extends Struct.ComponentSchema {
  collectionName: 'components_params_parametry';
  info: {
    description: '';
    displayName: '\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B';
  };
  attributes: {
    airconds: Schema.Attribute.Component<'airconds.airconds', false>;
    centrifugal_chillers: Schema.Attribute.Component<
      'centrifugal-chillers.centrifugal-chillers',
      false
    >;
    chillers: Schema.Attribute.Component<'chillers.chillers', false>;
    heat_curtains: Schema.Attribute.Component<
      'heat-curtains.heat-curtains',
      false
    >;
    vrf_inner: Schema.Attribute.Component<'vrf-inner.vrf-inner', false>;
    vrf_outer: Schema.Attribute.Component<'vrf-outer.vrf-outer', false>;
  };
}

export interface VariationVariaczii extends Struct.ComponentSchema {
  collectionName: 'components_variation_variaczii';
  info: {
    description: '';
    displayName: '\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    params: Schema.Attribute.Component<'params.parametry', false>;
    price: Schema.Attribute.Decimal;
    price_wifi: Schema.Attribute.Decimal;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    variation: Schema.Attribute.Enumeration<
      [
        '\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C',
        '\u0414\u043B\u0438\u043D\u0430',
        '\u041C\u043E\u0434\u0435\u043B\u044C',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface VrfInnerVrfInner extends Struct.ComponentSchema {
  collectionName: 'components_vrf_inner_vrf_inners';
  info: {
    displayName: 'vrf-inner';
  };
  attributes: {
    cooling_btu: Schema.Attribute.String;
  };
}

export interface VrfOuterVrfOuter extends Struct.ComponentSchema {
  collectionName: 'components_vrf_outer_vrf_outers';
  info: {
    description: '';
    displayName: 'vrf-outer';
  };
  attributes: {
    airflow: Schema.Attribute.String;
    automat_a: Schema.Attribute.String;
    compressor_brand: Schema.Attribute.String;
    compressor_quantity: Schema.Attribute.String;
    compressor_type: Schema.Attribute.String;
    cooling_kw: Schema.Attribute.String;
    cooling_power_cons_nom: Schema.Attribute.String;
    cop: Schema.Attribute.String;
    eer: Schema.Attribute.String;
    esp: Schema.Attribute.String;
    fan_motor_type: Schema.Attribute.String;
    fan_quantity: Schema.Attribute.String;
    freon_type: Schema.Attribute.String;
    freon_value: Schema.Attribute.String;
    gas_pipe_diam: Schema.Attribute.String;
    heating_kw: Schema.Attribute.String;
    heating_power_cons_nom: Schema.Attribute.String;
    inner_blocks_power: Schema.Attribute.String;
    liquid_pipe_diam: Schema.Attribute.String;
    max_blocks: Schema.Attribute.String;
    max_energy_cons_a: Schema.Attribute.String;
    noise: Schema.Attribute.String;
    package_sizes: Schema.Attribute.String;
    powerSupply: Schema.Attribute.String;
    sizes: Schema.Attribute.String;
    sound_pressure_level: Schema.Attribute.String;
    temp_cooling: Schema.Attribute.String;
    temp_heating: Schema.Attribute.String;
    type: Schema.Attribute.String;
    weight: Schema.Attribute.String;
  };
}

export interface WashesWashes extends Struct.ComponentSchema {
  collectionName: 'components_washes_washes';
  info: {
    displayName: 'washes';
  };
  attributes: {
    category_type: Schema.Attribute.String;
    color: Schema.Attribute.String;
    depth: Schema.Attribute.Integer;
    display_type: Schema.Attribute.String;
    energy_class: Schema.Attribute.String;
    has_anti_crease: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    has_auto_dry: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_extra_rinse: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    has_heat_pump: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_pre_wash: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_smart_control: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    has_steam: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_steam_wash: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    has_time_dry: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_uv_sanitization: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    load_capacity: Schema.Attribute.String;
    loading_type: Schema.Attribute.String;
    max_spin_speed: Schema.Attribute.Integer;
    mode_air_refresh: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_allergy_care: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_cold_wash: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_cotton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_delicates: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_down_wear: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_dry_only: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_eco_40_60: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_jeans: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_mixed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_quick_15: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_quick_45: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_quick_wash_dry: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_rinse_spin: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_spin_only: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_synthetics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_turbo_wash: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    mode_wash_dry: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mode_wool: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    motor_type: Schema.Attribute.String;
    noise_level_spin: Schema.Attribute.Integer;
    programs_count: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
    water_consumption: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'airconds.airconds': AircondsAirconds;
      'boilers.boilers': BoilersBoilers;
      'centrifugal-chillers.centrifugal-chillers': CentrifugalChillersCentrifugalChillers;
      'chillers.chillers': ChillersChillers;
      'dehumids.dehumids': DehumidsDehumids;
      'fridges.fridges': FridgesFridges;
      'general-params.general-params': GeneralParamsGeneralParams;
      'heat-curtains.heat-curtains': HeatCurtainsHeatCurtains;
      'humidifiers.humidifiers': HumidifiersHumidifiers;
      'img-description.img-description': ImgDescriptionImgDescription;
      'params-other.params-other': ParamsOtherParamsOther;
      'params.parametry': ParamsParametry;
      'variation.variaczii': VariationVariaczii;
      'vrf-inner.vrf-inner': VrfInnerVrfInner;
      'vrf-outer.vrf-outer': VrfOuterVrfOuter;
      'washes.washes': WashesWashes;
    }
  }
}
