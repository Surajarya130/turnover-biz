export interface LinksType {
  name: string;
  value: string;
  id: number;
}

export interface CheckListsType {
  title: string;
  value: string;
  id: number;
  userId?: number | null;
}
