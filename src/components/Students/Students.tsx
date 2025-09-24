'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInferface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <h1 key={student.id}>
          {student.first_name}
          {student.last_name}
          {student.middle_name}
          {student.groupId}
        </h1>
      ))}
    </div>
  );
};

export default Students;