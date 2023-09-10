function threeSum(arr, target) {
arr.sort((a,b)=> a-b );
	let closestsum= Infinity;

	for(let i=0;i<arr.length-2;i++){
		if(i!=0 && arr[i]==arr[i-1])continue;
		let j=i+1;
		let k=arr.length-1;
		while(j<k){
			sum=arr[i]+arr[j]+arr[k];
			if(Math.abs(sum-target) < Math.abs(closestsum-target))
				closestsum=sum;

			while(j<k && arr[j-1]!=arr[j]) j++;
			while(k>j && arr[k+1]!=arr[k]) k--;

			if(sum>target) k--;
			else j++;
		}
		
	}
	return closestsum;
  
}

module.exports = threeSum;
