
#include<iostream>
#include<stack>
using namespace std;
int main()
{
	stack<int>  q;
	q.push(1);
	
	cout<<"q.size "<<q.size()<<endl;
	cout<<"q.top "<<q.top()<<endl;   //輸出 stack top
	
	q.pop();	//删除stack top
	q.pop();	//删除stack top
	cout<<"q.size "<<q.size()<<endl;  
	cout<<"q.top "<<q.top()<<endl;
	cout<<"q.size "<<q.size()<<endl;  
	cout<<"finish"<<endl;
}