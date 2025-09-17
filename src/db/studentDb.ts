import sqlite3 from 'sqlite3';

import type StudentInferface from '@/types/StudentInferface';

sqlite3.verbose();

export const getStudentsDb = async (): Promise<StudentInferface[]> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  const students = await new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM student';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        db.close();
        return;
      }
      resolve(rows);
      db.close();
    });
  });
  
  return students as StudentInferface[];
};
