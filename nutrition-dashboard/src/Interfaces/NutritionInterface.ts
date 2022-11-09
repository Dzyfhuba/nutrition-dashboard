export interface NutritionInterface {
  id: string
  person_id?: string,
  month: number,
  weight: number,
  height: number,
  zScore: number,
  created_at: Date,
  updated_at: Date,
}
  