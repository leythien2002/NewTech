import React from 'react'
import DataTable from '../../components/Table/Table1';
import ContentLayout from '../../layouts/ContentLayout';

const UserList = () => {
  return (
    <ContentLayout pageName={'User'} isShowButton={true} navigateTo={'/route2'} content={<DataTable />}/>
  )
}

export default UserList