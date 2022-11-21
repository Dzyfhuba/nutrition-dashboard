export interface NutritionInterface {
  id: string
  person_id?: string,
  month: number,
  weight: number,
  height: number,
  zScore1: number,
  zScore2: number,
  zScore3: number,
  datetime: string,
  createdAt: string,
  updatedAt: string,
}
  