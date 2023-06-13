import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionResult = {
  skip: number;
  limit: number;
  page: number;
  sortBy: string;
  sortOrder: SortOrder;
};

const calculatePagination = (options: IOptions): IOptionResult => {
  const { page = 1, limit = 10 } = options;
  const skip = (Number(page) - 1) * Number(limit);

  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';

  return {
    skip,
    limit,
    page,
    sortBy,
    sortOrder,
  };
};

export const paginationHelper = {
  calculatePagination,
};
