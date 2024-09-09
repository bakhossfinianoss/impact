export interface Content {
  header: {
    title: string;
    description: string;
  };
  middleObj: {
    title: string;
    description: string;
  }[];
  others: Record<string, any>[];
}
