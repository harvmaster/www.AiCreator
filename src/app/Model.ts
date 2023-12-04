class Model {
  data?: any;
  normalisationValues?: {
    [key: string]: number
  } = {}
  filters: Filter[] = [];
  transformations: Transformation[] = [];
  fields: string[] = [];

  layers: Layer[] = [];

  constructor(data?: any) {
    this.data = data;
  }

  addFilter(filter: Filter) {
    this.filters.push(filter);
  }

  addTransformation(transformation: Transformation) {
    this.transformations.push(transformation);
  }

  addLayer(layer: Layer) {
    this.layers.push(layer);
  }

  addField(field: string) {
    this.fields.push(field);
  }

  getFields() {
    return this.fields;
  }

  getFilters() {
    return this.filters;
  }

  getTransformations() {
    return this.transformations;
  }

  getLayers() {
    return this.layers;
  }

  getData() {
    return this.data;
  }

  getNormalisationValues() {
    return this.normalisationValues;
  }

  setNormalisationValues(normalisationValues: {
    [key: string]: number
  }) {
    this.normalisationValues = normalisationValues;
  }

  setData(data: any) {
    this.data = data;
  }

  setFilters(filters: Filter[]) {
    this.filters = filters;
  }

  setTransformations(transformations: Transformation[]) {
    this.transformations = transformations;
  }

  setLayers(layers: Layer[]) {
    this.layers = layers;
  }

  setFields(fields: string[]) {
    this.fields = fields;
  }
}